import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [432],
	set: Set,

	name: {
		en: "Purugly",
		fr: "Chaffreux",
		es: "Purugly",
		it: "Purugly",
		pt: "Purugly",
		de: "Shnurgarst"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
		es: "Glameow",
		it: "Glameow",
		pt: "Glameow",
		de: "Charmian"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Body Slam",
			fr: "Plaquage",
			es: "Golpe Cuerpo",
			it: "Corposcontro",
			pt: "Pancada Corporal",
			de: "Bodyslam"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		en: "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658789,
				tcgplayer: 272367
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658789,
				tcgplayer: 272367
			}
		},
	],
}

export default card
