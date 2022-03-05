// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get isWhitelisted(): boolean {
    let value = this.get("isWhitelisted");
    return value.toBoolean();
  }

  set isWhitelisted(value: boolean) {
    this.set("isWhitelisted", Value.fromBoolean(value));
  }

  get bids(): Array<string> {
    let value = this.get("bids");
    return value.toStringArray();
  }

  set bids(value: Array<string>) {
    this.set("bids", Value.fromStringArray(value));
  }

  get created(): Array<string> {
    let value = this.get("created");
    return value.toStringArray();
  }

  set created(value: Array<string>) {
    this.set("created", Value.fromStringArray(value));
  }

  get items(): Array<string> {
    let value = this.get("items");
    return value.toStringArray();
  }

  set items(value: Array<string>) {
    this.set("items", Value.fromStringArray(value));
  }
}

export class Artwork extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Artwork entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Artwork entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Artwork", id.toString(), this);
  }

  static load(id: string): Artwork | null {
    return store.get("Artwork", id) as Artwork | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get metadataUri(): string | null {
    let value = this.get("metadataUri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadataUri(value: string | null) {
    if (value === null) {
      this.unset("metadataUri");
    } else {
      this.set("metadataUri", Value.fromString(value as string));
    }
  }

  get metadataHash(): string | null {
    let value = this.get("metadataHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadataHash(value: string | null) {
    if (value === null) {
      this.unset("metadataHash");
    } else {
      this.set("metadataHash", Value.fromString(value as string));
    }
  }

  get broken(): boolean {
    let value = this.get("broken");
    return value.toBoolean();
  }

  set broken(value: boolean) {
    this.set("broken", Value.fromBoolean(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get tags(): Array<string> | null {
    let value = this.get("tags");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tags(value: Array<string> | null) {
    if (value === null) {
      this.unset("tags");
    } else {
      this.set("tags", Value.fromStringArray(value as Array<string>));
    }
  }

  get tagsString(): string | null {
    let value = this.get("tagsString");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tagsString(value: string | null) {
    if (value === null) {
      this.unset("tagsString");
    } else {
      this.set("tagsString", Value.fromString(value as string));
    }
  }

  get mimeType(): string | null {
    let value = this.get("mimeType");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mimeType(value: string | null) {
    if (value === null) {
      this.unset("mimeType");
    } else {
      this.set("mimeType", Value.fromString(value as string));
    }
  }

  get size(): BigInt | null {
    let value = this.get("size");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set size(value: BigInt | null) {
    if (value === null) {
      this.unset("size");
    } else {
      this.set("size", Value.fromBigInt(value as BigInt));
    }
  }

  get mediaUri(): string | null {
    let value = this.get("mediaUri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mediaUri(value: string | null) {
    if (value === null) {
      this.unset("mediaUri");
    } else {
      this.set("mediaUri", Value.fromString(value as string));
    }
  }

  get mediaHash(): string | null {
    let value = this.get("mediaHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mediaHash(value: string | null) {
    if (value === null) {
      this.unset("mediaHash");
    } else {
      this.set("mediaHash", Value.fromString(value as string));
    }
  }

  get removed(): BigInt | null {
    let value = this.get("removed");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set removed(value: BigInt | null) {
    if (value === null) {
      this.unset("removed");
    } else {
      this.set("removed", Value.fromBigInt(value as BigInt));
    }
  }

  get currentBid(): string | null {
    let value = this.get("currentBid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currentBid(value: string | null) {
    if (value === null) {
      this.unset("currentBid");
    } else {
      this.set("currentBid", Value.fromString(value as string));
    }
  }

  get creationDate(): BigInt {
    let value = this.get("creationDate");
    return value.toBigInt();
  }

  set creationDate(value: BigInt) {
    this.set("creationDate", Value.fromBigInt(value));
  }

  get modified(): BigInt | null {
    let value = this.get("modified");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set modified(value: BigInt | null) {
    if (value === null) {
      this.unset("modified");
    } else {
      this.set("modified", Value.fromBigInt(value as BigInt));
    }
  }

  get forSale(): boolean {
    let value = this.get("forSale");
    return value.toBoolean();
  }

  set forSale(value: boolean) {
    this.set("forSale", Value.fromBoolean(value));
  }

  get burned(): boolean {
    let value = this.get("burned");
    return value.toBoolean();
  }

  set burned(value: boolean) {
    this.set("burned", Value.fromBoolean(value));
  }
}

export class BidLog extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BidLog entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BidLog entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BidLog", id.toString(), this);
  }

  static load(id: string): BidLog | null {
    return store.get("BidLog", id) as BidLog | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get bidder(): string {
    let value = this.get("bidder");
    return value.toString();
  }

  set bidder(value: string) {
    this.set("bidder", Value.fromString(value));
  }

  get item(): string {
    let value = this.get("item");
    return value.toString();
  }

  set item(value: string) {
    this.set("item", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get accepted(): boolean {
    let value = this.get("accepted");
    return value.toBoolean();
  }

  set accepted(value: boolean) {
    this.set("accepted", Value.fromBoolean(value));
  }

  get canceled(): boolean {
    let value = this.get("canceled");
    return value.toBoolean();
  }

  set canceled(value: boolean) {
    this.set("canceled", Value.fromBoolean(value));
  }
}
