import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'en-us': "Sylveon",
		'fr-fr': "Nymphali",
		'es-es': "Sylveon",
		'pt-br': "Sylveon",
		'it-it': "Sylveon",
		'de-de': "Feelinara"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Safeguard",
			'fr-fr': "Rune Protect",
			'es-es': "Velo Sagrado",
			'pt-br': "Salvaguarda",
			'it-it': "Salvaguardia",
			'de-de': "Bodyguard"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex de votre adversaire.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex de tu rival.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex do seu oponente.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex del tuo avversario.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'pt-br': "Tiro Mágico",
			'it-it': "Magicolpo",
			'de-de': "Magischer Schuss"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "MINAMINAMI Take",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805429,
				tcgplayer: 610395
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805429,
				tcgplayer: 610395
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806460,
				tcgplayer: 610563
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806461,
				tcgplayer: 610664
			}
		},
		{
			type: "holo",
			stamp: ["30th-pokeday"],
			thirdParty: {
				cardmarket: 810420,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858734,
			}
		},
	],
}

export default card
