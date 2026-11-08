import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Golurk V",
		'fr-fr': "Golemastoc V",
		'es-es': "Golurk V",
		'it-it': "Golurk V",
		'pt-br': "Golurk V",
		'de-de': "Golgantes V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Eske Yoshinob",

	attacks: [{
		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'pt-br': "Mega Punch",
			'de-de': "Megahieb"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Rewind Beam",
			'fr-fr': "Rayon Régressif",
			'es-es': "Rayo de Retorno",
			'it-it': "Riavvolgiraggio",
			'pt-br': "Rewind Beam",
			'de-de': "Rückspulstrahl"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en plaçant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, involuciónalo poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annulla la sua evoluzione mettendone la carta Evoluzione di fase più alta nella mano del tuo avversario.",
			'pt-br': "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner die Karte mit der höchsten Entwicklungsstufe auf die Hand gibst."
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
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574118,
				tcgplayer: 246692
			}
		},
	],
}

export default card
