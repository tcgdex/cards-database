import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		pt: "Arbok",
		de: "Arbok"
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
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans",
		de: "Rettan"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gastro Acid",
				fr: "Suc Digestif",
				es: "Bilis",
				it: "Gastroacido",
				pt: "Ácido Gástrico",
				de: "Magensäfte"
			},
			effect: {
				en: "The Defending Pokémon has no Abilities until the end of your next turn.",
				fr: "Le Pokémon Défenseur n'a pas de talent jusqu'à la fin de votre prochain tour.",
				es: "El Pokémon Defensor no tiene ninguna habilidad hasta el final de tu próximo turno.",
				it: "Le abilità del Pokémon difensore non hanno più effetto fino alla fine del tuo prossimo turno.",
				pt: "O Pokémon Defensor não terá Habilidades até o final da sua próxima vez de jogar.",
				de: "Das Verteidigende Pokémon hat bis zum Ende deines nächsten Zuges keine Fähigkeit."
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
				en: "Poison Jab",
				fr: "Direct Toxik",
				es: "Puya Nociva",
				it: "Velenpuntura",
				pt: "Golpe Envenenado",
				de: "Gifthieb"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
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

	thirdParty: {
		cardmarket: 281385,
		tcgplayer: 83571
	}
}

export default card
