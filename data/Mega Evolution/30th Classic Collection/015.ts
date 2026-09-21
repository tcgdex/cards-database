import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Erika's Jigglypuff",
		fr: "Rondoudou d'Erika",
		de: "Erikas Pummeluff",
		es: "Jigglypuff de Erika",
		it: "Jigglypuff di Erika",
		pt: "Jigglypuff da Érica",
		'es-mx': "Jigglypuff de Erika"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Group Therapy",
			fr: "Thérapie de groupe",
			de: "Gruppentherapie",
			es: "Terapia de Grupo",
			it: "Terapia di Gruppo",
			pt: "Terapia em Grupo",
			'es-mx': "Terapia de Grupo"
		},

		effect: {
			en: "You and your opponent remove 1 damage counter from each of your Pokémon with damage counters on them.",
			fr: "Votre adversaire et vous retirez 1 marqueur de dégât de chacun de vos Pokémon ayant des marqueurs de dégât.",
			de: "Du und dein Gegner entfernt 1 Schadensmarke von jedem eurer Pokémon, auf denen Schadensmarken liegen.",
			es: "Tu rival y tú quitáis 1 contador de daño de cada Pokémon que tenga contadores de daño.",
			it: "Tu e il tuo avversario togliete un segnalino danno da ogni vostro Pokémon che ha segnalini danno.",
			pt: "Você e seu oponente removem 1 marcador de dano de cada um dos seus Pokémon com marcadores de dano neles.",
			'es-mx': "Tu rival y tú quitan 1 contador de daño de cada Pokémon que tenga contadores de daño."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pulled Punch",
			fr: "Poing doux",
			de: "Verhaltener Schlag",
			es: "Golpe Retenido",
			it: "Smorza-Pugno",
			pt: "Soco Contido",
			'es-mx': "Golpe Contenido"
		},

		effect: {
			en: "If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any damage counters on it, this attack does 10 damage.",
			fr: "Si le Pokémon Défenseur n'a aucun marqueur de dégât, cette attaque inflige 40 dégâts. S'il a au moins un marqueur de dégât, cette attaque inflige 10 dégâts.",
			de: "Falls auf dem verteidigenden Pokémon keine Schadensmarken liegen, fügt dieser Angriff 40 Schadenspunkte zu. Falls darauf mindestens 1 Schadensmarke liegt, fügt dieser Angriff 10 Schadenspunkte zu.",
			es: "Si el Pokémon a la defensa no tiene contadores de daño, este ataque hace 40 puntos de daño. Si tiene algún contador de daño, este ataque hace 10 puntos de daño.",
			it: "Se il Pokémon Difensore non ha segnalini danno su di sé, questo attacco infligge 40 danni. Se ha dei segnalini danno su di sé, questo attacco infligge 10 danni.",
			pt: "Se o Pokémon Defensor não tiver marcadores de dano nele, este ataque causa 40 pts. de dano. Se ele tiver marcadores de dano nele, este ataque causa 10 pts. de dano.",
			'es-mx': "Si el Pokémon a la defensa no tiene contadores de daño, este ataque hace 40 puntos de daño. Si tiene algún contador de daño, este ataque hace 10 puntos de daño."
		},

		damage: "40-",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907942,
				tcgplayer: 716195
			}
		}
	],
}

export default card