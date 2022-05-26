import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Arcanine",
		fr: "Arcanin de Hisui",
		es: "Arcanine de Hisui",
		it: "Arcanine di Hisui",
		pt: "Arcanine de Hisui",
		de: "Hisui-Arkani"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Hisuian Growlithe",
		fr: "Caninos de Hisui",
		es: "Growlithe de Hisui",
		it: "Growlithe di Hisui",
		pt: "Growlithe de Hisui",
		de: "Hisui-Fukano"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			es: "Alud de Rocas",
			it: "Macignata",
			pt: "Rocha Esmagadora",
			de: "Felsenquetscher"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Scorching Horn",
			fr: "Corne Brûlante",
			es: "Cuerno Abrasador",
			it: "Corno Ustionante",
			pt: "Chifre Abrasador",
			de: "Versengendes Horn"
		},

		effect: {
			en: "If this Pokémon has any Fire Energy attached, this attack does 80 more damage, and your opponent's Active Pokémon is now Burned.",
			fr: "Si au moins une Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più e il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 80 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Queimado.",
			de: "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card