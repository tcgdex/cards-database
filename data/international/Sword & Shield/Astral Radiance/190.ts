import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [549],
	set: Set,

	name: {
		'en-us': "Hisuian Lilligant VSTAR",
		'fr-fr': "Fragilady de Hisui VSTAR",
		'es-es': "Lilligant de Hisui V-ASTRO",
		'it-it': "Lilligant di Hisui V ASTRO",
		'pt-br': "Lilligant de Hisui V-ASTRO",
		'de-de': "Hisui-Dressella VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Hisuian Lilligant V",
		'fr-fr': "Fragilady de Hisui-V",
		'es-es': "Lilligant de Hisui V",
		'it-it': "Lilligant di Hisui-V",
		'pt-br': "Lilligant de Hisui V",
		'de-de': "Hisui-Dressella-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Parallel Spin",
			'fr-fr': "Pirouette Parallèle",
			'es-es': "Giro Paralelo",
			'it-it': "Giro Parallelo",
			'pt-br': "Giro Paralelo",
			'de-de': "Parallelpirouette"
		},

		effect: {
			'en-us': "You may put an Energy attached to this Pokémon into your hand. If you do, this attack does 100 more damage.",
			'fr-fr': "Vous pouvez ajouter à votre main une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Puedes poner 1 Energía unida a este Pokémon en tu mano. Si lo haces, este ataque hace 100 puntos de daño más.",
			'it-it': "Puoi prendere un'Energia assegnata a questo Pokémon e aggiungerla alle carte che hai in mano. Se lo fai, questo attacco infligge 100 danni in più.",
			'pt-br': "Você pode colocar 1 Energia ligada a este Pokémon na sua mão. Se fizer isto, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Du kannst 1 an dieses Pokémon angelegte Energie auf deine Hand nehmen. Wenn du das machst, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "130+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 658851,
				tcgplayer: 272444
			}
		},
	],
}

export default card
