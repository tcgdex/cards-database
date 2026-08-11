import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [908],
	set: Set,

	name: {
		'en-us': "Meowscarada",
		'fr-fr': "Miascarade",
		'es-es': "Meowscarada",
		'it-it': "Meowscarada",
		'pt-br': "Meowscarada",
		'de-de': "Maskagato"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Trick Cape",
			'fr-fr': "Cape de Prestidigitation",
			'es-es': "Truquicapa",
			'it-it': "Manteltrucco",
			'pt-br': "Capa da Travessura",
			'de-de': "Trickumhang"
		},

		effect: {
			'en-us': "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			'fr-fr': "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			'es-es': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'it-it': "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			'pt-br': "Você pode colocar uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele.",
			'de-de': "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
		},

		damage: 40
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Flower Blast",
			'fr-fr': "Explosion Florale",
			'es-es': "Explosión Floral",
			'it-it': "Esplosione Floreale",
			'pt-br': "Flor Explosiva",
			'de-de': "Blumenexplosion"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Ryota Murayama",

	description: {
		'en-us': "This Pokémon uses the reflective fur lining its cape to camouflage the stem of its flower, creating the illusion that the flower is floating.",
	},

	thirdParty: {
        cardmarket: 702311,
        tcgplayer: 487848
    }
}

export default card