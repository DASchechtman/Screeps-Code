import { ColonyMember } from "../core/ColonyMember"
import { JsonObj, Signal } from "./Interfaces"


export type Container = (
    StructureSpawn
    | StructureExtension
    | StructureTower
)

export type BehaviorType = StructureSpawn | StructureTower | StructureLink

export type HoleyArray<T> = (T | undefined)[]

export type Filter = (sender: Signal, other: ColonyMember) => boolean

export type Method = Filter

export type RoomPosObj = {pos: RoomPosition}

export type RoomPos = RoomPosition | RoomPosObj

export type ColonyMemberKey = number | string