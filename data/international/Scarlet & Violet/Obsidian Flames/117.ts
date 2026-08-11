import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'fr-fr': "Lougaroc",
		'en-us': "Lycanroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Rocabot",
		'en-us': "Rockruff",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Croc Finisseur",
			'en-us': "Finishing Fang",
			'es-es': "Colmillo Definitivo",
			'it-it': "Zannata di Grazia",
			'pt-br': "Presa Arrematadora",
			'de-de': "Finale Fänge"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire n'a aucun marqueur de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
			'en-us': "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
			'es-es': "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
			'it-it': "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
			'pt-br': "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
		},

		damage: 90
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Griffe Taillante",
			'en-us': "Slashing Claw",
			'es-es': "Garra Cuchillazo",
			'it-it': "Artigli Laceranti",
			'pt-br': "Garra Cortadora",
			'de-de': "Schlitzende Klaue"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon uses its rocky mane to slash any who approach. It will even disobey its Trainer if it dislikes the orders it was given.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725197,
				tcgplayer: 509865,
				cardtrader: 255802
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725197,
				tcgplayer: 509865,
				cardtrader: 255802
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

	
}

export default card
