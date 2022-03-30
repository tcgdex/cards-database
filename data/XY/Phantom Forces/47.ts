import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		it: "Gliscor",
		pt: "Gliscor",
		de: "Skorgro"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Submission Hold",
				fr: "Prise Pétrifiante",
				es: "Sujeción Absoluta",
				it: "Presa Sottomissione",
				pt: "Chave da Submissão",
				de: "Schwitzkasten"
			},
			effect: {
				en: "Your opponent can't attach Energy from his or her hand to the Defending Pokémon during his or her next turn.",
				fr: "Votre adversaire ne peut pas attacher d'Énergie de sa main au Pokémon Défenseur pendant son prochain tour.",
				es: "Tu rival no puede unir Energía de su mano al Pokémon Defensor durante su próximo turno.",
				it: "Il tuo avversario non può assegnare Energia dalla sua mano al Pokémon difensore durante il suo prossimo turno.",
				pt: "Seu oponente não poderá ligar Energia da própria mão no Pokémon Defensor durante a próxima vez de jogar dele ou dela.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Energie von seiner Hand an das Verteidigende Pokémon anlegen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
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
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
