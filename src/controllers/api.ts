"use strict";

import { Response, Request, NextFunction } from "express";
import { User } from "../models/User";


/**
 * GET /api
 * List of API examples.
 */
export const getApi = async (req: Request, res: Response) => {
    const result = await User.findAll({
      raw: true
    });
    // res.se nd(result)
};

/**
 * GET /api/facebook
 * Facebook API example.
 */
