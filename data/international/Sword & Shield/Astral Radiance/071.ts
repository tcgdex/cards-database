import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Hisuian Arcanine",
		'fr-fr': "Arcanin de Hisui",
		'es-es': "Arcanine de Hisui",
		'it-it': "Arcanine di Hisui",
		'pt-br': "Arcanine de Hisui",
		'de-de': "Hisui-Arkani"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Hisuian Growlithe",
		'fr-fr': "Caninos de Hisui",
		'es-es': "Growlithe de Hisui",
		'it-it': "Growlithe di Hisui",
		'pt-br': "Growlithe de Hisui",
		'de-de': "Hisui-Fukano"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Boulder Crush",
			'fr-fr': "Rocher Écrasant",
			'es-es': "Alud de Rocas",
			'it-it': "Macignata",
			'pt-br': "Rocha Esmagadora",
			'de-de': "Felsenquetscher"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Scorching Horn",
			'fr-fr': "Corne Brûlante",
			'es-es': "Cuerno Abrasador",
			'it-it': "Corno Ustionante",
			'pt-br': "Chifre Abrasador",
			'de-de': "Versengendes Horn"
		},

		effect: {
			'en-us': "If this Pokémon has any Fire Energy attached, this attack does 80 more damage, and your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Si au moins une Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più e il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 80 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Queimado.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Snaps at its foes with fangs cloaked in blazing flame. Despite its bulk, it deftly feints every which way, leading opponents on a deceptively merry chase as it all but dances around them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658660,
				tcgplayer: 272272
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658660,
				tcgplayer: 272272
			}
		},
	],
}

export default card
