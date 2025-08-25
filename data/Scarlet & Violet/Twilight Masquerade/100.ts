import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [59],
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
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Proud Fangs",
			fr: "Crocs Fiers",
			es: "Colmillos Imponentes",
			it: "Zanne Fiere",
			pt: "Presas Orgulhosas",
			de: "Stattliche Fänge"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 90 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 90 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			es: "Llama Abrasadora",
			it: "Fiamme Ustionanti",
			pt: "Chama Cauterizante",
			de: "Sengende Flammen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "SIE NANAHARA",

	thirdParty: {
		cardmarket: 769274
	}
}

export default card
