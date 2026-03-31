import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		de: "Psiaugon",
		it: "Meowstic",
		pt: "Meowstic"
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		678
	],
	hp: 100,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		de: "Psiau",
		it: "Espurr",
		pt: "Espurr"
	},
	attacks: [
		{
			cost: [
				"Psychic"
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
				es: "Desconcierto",
				de: "Perplex",
				it: "Sconcerto",
				pt: "Perplexo"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso."
			}
		},
		{
			cost: [
				"Psychic"
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				de: "Psychokinese",
				it: "Psichico",
				pt: "Psíquico"
			},
			damage: "30+",
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
			}
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Kannnu",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684419,
		cardmarket: 877448
	}
}

export default card
