import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Lilligant VSTAR",
		fr: "Fragilady de Hisui VSTAR",
		es: "Lilligant de Hisui V-ASTRO",
		it: "Lilligant di Hisui V ASTRO",
		pt: "Lilligant de Hisui V-ASTRO",
		de: "Hisui-Dressella VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		en: "Hisuian Lilligant V",
		fr: "Fragilady de Hisui-V",
		es: "Lilligant de Hisui V",
		it: "Lilligant di Hisui-V",
		pt: "Lilligant de Hisui V",
		de: "Hisui-Dressella-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Parallel Spin",
			fr: "Pirouette Parallèle",
			es: "Giro Paralelo",
			it: "Giro Parallelo",
			pt: "Giro Paralelo",
			de: "Parallelpirouette"
		},

		effect: {
			en: "You may put an Energy attached to this Pokémon into your hand. If you do, this attack does 100 more damage.",
			fr: "Vous pouvez ajouter à votre main une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Puedes poner 1 Energía unida a este Pokémon en tu mano. Si lo haces, este ataque hace 100 puntos de daño más.",
			it: "Puoi prendere un'Energia assegnata a questo Pokémon e aggiungerla alle carte che hai in mano. Se lo fai, questo attacco infligge 100 danni in più.",
			pt: "Você pode colocar 1 Energia ligada a este Pokémon na sua mão. Se fizer isto, este ataque causará 100 pontos de dano a mais.",
			de: "Du kannst 1 an dieses Pokémon angelegte Energie auf deine Hand nehmen. Wenn du das machst, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "130+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658514,
		tcgplayer: 272218
	}
}

export default card
