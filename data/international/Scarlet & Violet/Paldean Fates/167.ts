import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [959],
	set: Set,

	name: {
		'en-us': "Tinkaton",
		'fr-fr': "Forgelina",
		'es-es': "Tinkaton",
		'it-it': "Tinkaton",
		'pt-br': "Tinkaton",
		'de-de': "Granforgita"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'de-de': "Tafforgita"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Gather Materials",
			'fr-fr': "Collecte de Matériaux",
			'es-es': "Acopio de Materiales",
			'it-it': "Raccolta di Materiali",
			'pt-br': "Juntar Materiais",
			'de-de': "Material sammeln"
		},

		effect: {
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 3 cards.",
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 3 cartes.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 3 cartas.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare tre carte.",
			'pt-br': "Você deve descartar uma carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 3 cartas.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Special Hammer",
			'fr-fr': "Marteau Spécial",
			'es-es': "Martillo Especial",
			'it-it': "Martello Speciale",
			'pt-br': "Martelo Especial",
			'de-de': "Spezieller Hammer"
		},

		effect: {
			'en-us': "If this Pokémon has any Special Energy attached, this attack does 90 more damage.",
			'fr-fr': "Si au moins une Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751706,
				tcgplayer: 534704,
				cardtrader: 274352
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "This intelligent Pokémon has a very daring disposition. It knocks rocks into the sky with its hammer, aiming for flying Corviknight.",
	},

}

export default card
