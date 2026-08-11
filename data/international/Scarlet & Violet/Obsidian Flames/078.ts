import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		'fr-fr': "Ampibidou",
		'en-us': "Bellibolt",
		'es-es': "Bellibolt",
		'it-it': "Bellibolt",
		'pt-br': "Bellibolt",
		'de-de': "Wampitz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Têtampoule",
		'en-us': "Tadbulb",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Isolant",
			'en-us': "Insulator",
			'es-es': "Aislante",
			'it-it': "Isolante",
			'pt-br': "Isolante",
			'de-de': "Isolator"
		},

		effect: {
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon {L} de votre adversaire.",
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's {L} Pokémon.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon {L} de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon {L} del tuo avversario.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon {L} do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von {L}-Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Avantage Foudroyant",
			'en-us': "Thunderous Edge",
			'es-es': "Filo Atronador",
			'it-it': "Lama Tonante",
			'pt-br': "Gume Trovejante",
			'de-de': "Donnerkante"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725158,
				tcgplayer: 509862,
				cardtrader: 255638
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725158,
				tcgplayer: 509862,
				cardtrader: 255638
			}
		},
	],

	illustrator: "Toshinao Aoki",

	
}

export default card
