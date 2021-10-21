import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Golurk V",
		fr: "Golemastoc V",
		es: "Golurk V",
		it: "Golurk V",
		pt: "Golurk V",
		de: "Golgantes V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Eske Yoshinob",

	attacks: [{
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			pt: "Mega Punch",
			de: "Megahieb"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Rewind Beam",
			fr: "Rayon Régressif",
			es: "Rayo de Retorno",
			it: "Riavvolgiraggio",
			pt: "Rewind Beam",
			de: "Rückspulstrahl"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en plaçant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, involuciónalo poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annulla la sua evoluzione mettendone la carta Evoluzione di fase più alta nella mano del tuo avversario.",
			pt: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			de: "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner die Karte mit der höchsten Entwicklungsstufe auf die Hand gibst."
		},

		damage: 180,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	dexId: [623],
	regulationMark: "E",
	suffix: "V"
}

export default card
