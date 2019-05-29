/**
 * Example controller
 *
 * created by Sean Maxwell Apr 14, 2019
 */

import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';


@Controller('api')
export class ExampleController {

    private readonly logger: Logger;


    constructor() {
        this.logger = new Logger();
    }


    @Get(':msg')
    private getMessage(req: Request, res: Response): void {
        this.logger.info(req.params.msg);
        res.status(250).json({msg: req.params.msg});
    }


    @Put(':msg')
    private putMessage(req: Request, res: Response): void {
        this.logger.info(req.params.msg);
        res.status(250).json({msg: req.params.msg});
    }


    @Post(':msg')
    private postMessage(req: Request, res: Response): void {
        this.logger.info(req.params.msg);
        res.status(250).json({msg: req.params.msg}); // pick up here
    }


    @Delete(':msg')
    private delMessage(req: Request, res: Response): void {
        try {
            throw new Error(req.params.msg);
        } catch (err) {
            this.logger.err(err, true);
        }
        res.status(250).json({msg: req.params.msg});
    }
}
