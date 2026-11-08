import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Arbok",
		'fr-fr': "Arbok",
		'es-es': "Arbok",
		'it-it': "Arbok",
		'pt-br': "Arbok",
		'de-de': "Arbok"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gastro Acid",
				'fr-fr': "Suc Digestif",
				'es-es': "Bilis",
				'it-it': "Gastroacido",
				'pt-br': "Ácido Gástrico",
				'de-de': "Magensäfte"
			},
			effect: {
				'en-us': "The Defending Pokémon has no Abilities until the end of your next turn.",
				'fr-fr': "Le Pokémon Défenseur n'a pas de talent jusqu'à la fin de votre prochain tour.",
				'es-es': "El Pokémon Defensor no tiene ninguna habilidad hasta el final de tu próximo turno.",
				'it-it': "Le abilità del Pokémon difensore non hanno più effetto fino alla fine del tuo prossimo turno.",
				'pt-br': "O Pokémon Defensor não terá Habilidades até o final da sua próxima vez de jogar.",
				'de-de': "Das Verteidigende Pokémon hat bis zum Ende deines nächsten Zuges keine Fähigkeit."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'es-es': "Puya Nociva",
				'it-it': "Velenpuntura",
				'pt-br': "Golpe Envenenado",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.",
	},

	thirdParty: {
		cardmarket: 281385,
		tcgplayer: 83571
	}
}

export default card
