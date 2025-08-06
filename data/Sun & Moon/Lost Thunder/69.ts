import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
		es: "Toxapex",
		it: "Toxapex",
		pt: "Toxapex",
		de: "Aggrostella"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		748,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
				es: "Picotazo Veneno",
				it: "Velenospina",
				pt: "Ferrão Venenoso",
				de: "Giftstachel"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Venom Fever",
				fr: "Fièvre Envenimée",
				es: "Fiebre Venenosa",
				it: "Febbre Tossica",
				pt: "Febre de Veneno",
				de: "Giftfieber"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 50 damage for each damage counter on that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño por cada contador de daño en ese Pokémon.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni per ogni segnalino danno presente su quel Pokémon.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano para cada contador de dano naquele Pokémon.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mal der Anzahl der Schadensmarken auf jenem Pokémon zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 365707,
		tcgplayer: 178878
	}
}

export default card
