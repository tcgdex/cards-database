import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Delphox",
		fr: "Goupelin",
		es: "Delphox",
		it: "Delphox",
		pt: "Delphox",
		de: "Fennexis"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		655,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flickering Flames",
				fr: "Flammes Vacillantes",
				es: "Llamas Titilantes",
				it: "Guizzafiamme",
				pt: "Chamas Tremeluzentes",
				de: "Züngelnde Flammen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psystorm",
				fr: "Tempête Psy",
				es: "Psicotormenta",
				it: "Psicotempesta",
				pt: "Tempestade Psíquica",
				de: "Psisturm"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all Pokémon in play.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à tous les Pokémon en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a todos los Pokémon en juego.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata ai Pokémon in gioco.",
				pt: "Esse ataque causa 20 de danos vezes a quantidade de Energia ligada a todos os Pokémon em jogo.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an allen Pokémon im Spiel angelegten Energien zu."
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
