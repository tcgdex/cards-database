import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Hatterene V",
		fr: "Sorcilence V",
		es: "Hatterene V",
		it: "Hatterene V",
		pt: "Hatterene V",
		de: "Silembrim V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Horoscope",
			fr: "Horoscope",
			es: "Horóscopo",
			it: "Oroscopo",
			pt: "Horóscopo",
			de: "Horoskop"
		},

		effect: {
			en: "Look at the top 3 cards of your deck. You may attach any number of Energy cards you find there to this Pokémon. Put the other cards back in any order.",
			fr: "Regardez les 3 cartes du dessus de votre deck. Vous pouvez attacher le nombre voulu de cartes Énergie que vous y trouvez à ce Pokémon. Replacez les autres cartes dans l'ordre de votre choix.",
			es: "Mira las 3 primeras cartas de tu baraja. Puedes unir cualquier cantidad de cartas de Energía que encuentres entre ellas a este Pokémon. Vuelve a poner el resto de las cartas en la parte superior de tu baraja en el orden que quieras.",
			it: "Guarda le prime tre carte del tuo mazzo. Puoi assegnare un numero qualsiasi di carte Energia presenti tra esse a questo Pokémon. Poi rimetti a posto le altre carte nell'ordine che preferisci.",
			pt: "Olhe as 3 cartas de cima do seu baralho. Você pode ligar qualquer número de cartas de Energia que encontrar lá a este Pokémon. Coloque as demais cartas de volta em qualquer ordem.",
			de: "Schau dir die obersten 3 Karten deines Decks an. Du kannst beliebig viele Energiekarten, die du dort findest, an dieses Pokémon anlegen. Lege die anderen Karten in beliebiger Reihenfolge zurück auf dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Teleportation Burst",
			fr: "Téléportation Explosive",
			es: "Explosión Teleportadora",
			it: "Scoppio Teletrasporto",
			pt: "Teletransporte Explosivo",
			de: "Blitz-Teleportation"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card