import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		'fr-fr': "Blizzaroi",
		'en-us': "Abomasnow",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Blizzi",
		'en-us': "Snover",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Désastre Glaçant",
			'en-us': "Freezing Disaster",
			'es-es': "Desastre Gélido",
			'it-it': "Disastro Congelante",
			'pt-br': "Desastre Congelante",
			'de-de': "Frostiges Desaster"
		},

		effect: {
			'fr-fr': "Les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
			'en-us': "Pokémon (both yours and your opponent's) can't be healed.",
			'es-es': "Los Pokémon (tanto tuyos como de tu rival) no pueden ser curados.",
			'it-it': "I Pokémon, sia tuoi che del tuo avversario, non possono essere curati.",
			'pt-br': "Os Pokémon (seus e do seu oponente) não podem ser curados.",
			'de-de': "Pokémon (deine und die deines Gegners) können nicht geheilt werden."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Poing Magnum",
			'en-us': "Magnum Punch",
			'es-es': "Puño Mágnum",
			'it-it': "Superpugno",
			'pt-br': "Soco Magnum",
			'de-de': "Magnum-Schlag"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715483,
				tcgplayer: 497422,
				cardtrader: 248307
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715483,
				tcgplayer: 497422,
				cardtrader: 248307
			}
		},
	],

	illustrator: "Ryuta Fuse",

	description: {
		'en-us': "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
	},
}

export default card
