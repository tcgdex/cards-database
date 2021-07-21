import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		pt: "Oricorio",
		de: "Choreogel"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Passionate Dance",
				fr: "Danse Passionnelle",
				es: "Danza Apasionada",
				it: "Danza Appassionata",
				pt: "Dança Apaixonada",
				de: "Euphorischer Tanz"
			},
			effect: {
				en: "Search your deck for up to 3 Basic Fire Pokémon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 Pokémon Fire de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 Pokémon Fire Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre Pokémon Base Fire e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 Pokémon Fire Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Fire-Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Kindle",
				fr: "Enflammer",
				es: "Encendido",
				it: "Infiammare",
				pt: "Inflamar",
				de: "Anzünden"
			},
			effect: {
				en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata a questo Pokémon. Se lo fai, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

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
