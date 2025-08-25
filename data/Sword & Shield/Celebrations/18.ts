import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Zamazenta V",
		fr: "Zamazenta V",
		es: "Zamazenta V",
		it: "Zamazenta V",
		pt: "Zamazenta V",
		de: "Zamazenta V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Mitsuhiro Arita",

	abilities: [{
		type: "Ability",

		name: {
			en: "Growl of the Shield",
			fr: "Grondement du Bouclier",
			es: "Gruñido del Escudo",
			it: "Ruggito dello Scudo",
			pt: "Rosnado do Escudo",
			de: "Knurren des Schildes"
		},

		effect: {
			en: "All of your Fighting Pokémon take 20 less damage from attacks from your opponent's Pokémon VMAX (after applying Weakness and Resistance). You can't apply more than 1 Growl of the Shield Ability at a time.",
			fr: "Tous vos Pokémon Fighting subissent 20 dégâts de moins provenant des attaques des Pokémon-VMAX de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu'un talent Grondement du Bouclier à la fois.",
			es: "Los ataques de los Pokémon VMAX de tu rival hacen 20 puntos de daño menos a todos tus Pokémon Fighting (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Gruñido del Escudo a la vez.",
			it: "I tuoi Pokémon Fighting subiscono 20 danni in meno dagli attacchi dei Pokémon-VMAX del tuo avversario, dopo aver applicato debolezza e resistenza. Non puoi applicare più di un'abilità Ruggito dello Scudo alla volta.",
			pt: "Todos os seus Pokémon Fighting recebem 20 pontos de dano a menos de ataques dos Pokémon VMAX do seu oponente (depois de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Rosnado do Escudo por vez.",
			de: "Allen deinen Fighting-Pokémon werden durch Attacken von Pokémon-VMAX deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Knurren des Schildes einsetzen."
		}
	}],

	attacks: [{
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	suffix: "V",
	dexId: [889],

	thirdParty: {
		cardmarket: 576763,
		tcgplayer: 250299
	}
}

export default card
