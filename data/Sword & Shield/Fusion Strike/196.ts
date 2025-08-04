import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [705],
	set: Set,

	name: {
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		it: "Sliggoo",
		pt: "Sliggoo",
		de: "Viscargot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
		es: "Goomy",
		it: "Goomy",
		pt: "Goomy",
		de: "Viscora"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		en: "The lump on its back contains its tiny brain. It thinks only of food and escaping its enemies."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Melt",
			fr: "Dissolution",
			de: "Schmelzen",
			es: "Derretir",
			pt: "Derreter",
			it: "Liquefazione"
		},

		damage: 20
	}, {
		cost: ["Water", "Psychic"],

		name: {
			en: "Body Slam",
			fr: "Plaquage",
			de: "Bodyslam",
			es: "Golpe Cuerpo",
			pt: "Pancada Corporal",
			it: "Corposcontro"
		},

		damage: 50,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582870,
		tcgplayer: 253354
	}
}

export default card