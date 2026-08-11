import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Toxapex",
		'fr-fr': "Prédastérie",
		'es-es': "Toxapex",
		'it-it': "Toxapex",
		'pt-br': "Toxapex",
		'de-de': "Aggrostella"
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
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-Venin",
				'es-es': "Picotazo Veneno",
				'it-it': "Velenospina",
				'pt-br': "Ferrão Venenoso",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Venom Fever",
				'fr-fr': "Fièvre Envenimée",
				'es-es': "Fiebre Venenosa",
				'it-it': "Febbre Tossica",
				'pt-br': "Febre de Veneno",
				'de-de': "Giftfieber"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Poisoned, this attack does 50 damage for each damage counter on that Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño por cada contador de daño en ese Pokémon.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni per ogni segnalino danno presente su quel Pokémon.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano para cada contador de dano naquele Pokémon.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mal der Anzahl der Schadensmarken auf jenem Pokémon zu."
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

	description: {
		'en-us': "Those attacked by Toxapex's poison will suffer intense pain for three days and three nights. Post-recovery, there will be some aftereffects.",
	},

	thirdParty: {
		cardmarket: 365707,
		tcgplayer: 178878
	}
}

export default card
