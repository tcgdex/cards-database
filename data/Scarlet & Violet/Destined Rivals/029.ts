import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Scovillain",
		fr: "Scovilain",
		de: "Halupenjo",
		it: "Scovillain",
		es: "Scovillain",
		pt: "Scovillain"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hot Bite",
			fr: "Morsure Brûlante",
			de: "Heißer Biss",
			it: "Morso Piccante",
			es: "Mordisco Picante",
			pt: "Mordida Picante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Super Spicy Breath",
			fr: "Souffle Super Pimenté",
			de: "Superscharfer Atem",
			it: "Alito Super Piccante",
			es: "Aliento Superpicante",
			pt: "Baforada Superapimentada"
		},

		effect: {
			en: "If this Pokémon has any {R} Energy attached, this attack does 90 more damage.",
			fr: "Si au moins une Énergie {R} est attachée à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 {R}-Energie angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha delle Energie {R} assegnate, questo attacco infligge 90 danni in più.",
			es: "Si este Pokémon tiene alguna Energía {R} unida, este ataque hace 90 puntos de daño más.",
			pt: "Se este Pokémon tiver alguma Energia {R} ligada a ele, este ataque causará 90 pontos de dano a mais."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card