import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen V",
		en: "Toxtricity V",
		es: "Toxtricity V",
		it: "Toxtricity V",
		pt: "Toxtricity V",
		de: "Riffex V"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Direct Toxik",
			en: "Poison Jab",
			es: "Puya Nociva",
			it: "Velenpuntura",
			pt: "Golpe Envenenado",
			de: "Gifthieb"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent's Active Pokémon is now Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Émeute Électrique",
			en: "Electric Riot",
			es: "Rebelión Eléctrica",
			it: "Tumulto Elettrico",
			pt: "Rixa Elétrica",
			de: "Elektro-Aufstand"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 90 more damage.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 90 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V"
}

export default card
