import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [858],
	set: Set,

	name: {
		'en-us': "Hatterene V",
		'fr-fr': "Sorcilence V",
		'es-es': "Hatterene V",
		'it-it': "Hatterene V",
		'pt-br': "Hatterene V",
		'de-de': "Silembrim V"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Horoscope",
			'fr-fr': "Horoscope",
			'es-es': "Horóscopo",
			'it-it': "Oroscopo",
			'pt-br': "Horóscopo",
			'de-de': "Horoskop"
		},

		effect: {
			'en-us': "Look at the top 3 cards of your deck. You may attach any number of Energy cards you find there to this Pokémon. Put the other cards back in any order.",
			'fr-fr': "Regardez les 3 cartes du dessus de votre deck. Vous pouvez attacher le nombre voulu de cartes Énergie que vous y trouvez à ce Pokémon. Replacez les autres cartes dans l'ordre de votre choix.",
			'es-es': "Mira las 3 primeras cartas de tu baraja. Puedes unir cualquier cantidad de cartas de Energía que encuentres entre ellas a este Pokémon. Vuelve a poner el resto de las cartas en la parte superior de tu baraja en el orden que quieras.",
			'it-it': "Guarda le prime tre carte del tuo mazzo. Puoi assegnare un numero qualsiasi di carte Energia presenti tra esse a questo Pokémon. Poi rimetti a posto le altre carte nell'ordine che preferisci.",
			'pt-br': "Olhe as 3 cartas de cima do seu baralho. Você pode ligar qualquer número de cartas de Energia que encontrar lá a este Pokémon. Coloque as demais cartas de volta em qualquer ordem.",
			'de-de': "Schau dir die obersten 3 Karten deines Decks an. Du kannst beliebig viele Energiekarten, die du dort findest, an dieses Pokémon anlegen. Lege die anderen Karten in beliebiger Reihenfolge zurück auf dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Teleportation Burst",
			'fr-fr': "Téléportation Explosive",
			'es-es': "Explosión Teleportadora",
			'it-it': "Scoppio Teletrasporto",
			'pt-br': "Teletransporte Explosivo",
			'de-de': "Blitz-Teleportation"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691782,
				tcgplayer: 478185
			}
		},
	],
}

export default card
