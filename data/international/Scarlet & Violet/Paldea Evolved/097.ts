import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [778],
	set: Set,

	name: {
		'fr-fr': "Mimiqui",
		'en-us': "Mimikyu",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Rune Protect",
			'en-us': "Safeguard",
			'es-es': "Velo Sagrado",
			'it-it': "Salvaguardia",
			'pt-br': "Salvaguarda",
			'de-de': "Bodyguard"
		},

		effect: {
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex et des Pokémon-V de votre adversaire.",
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex and Pokémon V.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex y Pokémon V de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex e dei Pokémon-V del tuo avversario.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex e Pokémon V do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex und Pokémon-V deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Œil Fantôme",
			'en-us': "Ghost Eye",
			'es-es': "Ojo Fantasmal",
			'it-it': "Sguardo Spettrale",
			'pt-br': "Olhar Fantasma",
			'de-de': "Geisterauge"
		},

		effect: {
			'fr-fr': "Placez 7 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			'en-us': "Put 7 damage counters on your opponent's Active Pokémon.",
			'es-es': "Pon 7 contadores de daño en el Pokémon Activo de tu rival.",
			'it-it': "Metti sette segnalini danno sul Pokémon attivo del tuo avversario.",
			'pt-br': "Coloque 7 contadores de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Lege 7 Schadensmarken auf das Aktive Pokémon deines Gegners."
		}
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715572,
				tcgplayer: 497512,
				cardtrader: 248726
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715572,
				tcgplayer: 497512,
				cardtrader: 248726
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu.",
	},
}

export default card
