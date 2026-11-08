import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [649],
	set: Set,

	name: {
		'en-us': "Genesect",
		'fr-fr': "Genesect",
		'es-es': "Genesect",
		'it-it': "Genesect",
		'pt-br': "Genesect",
		'de-de': "Genesect"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "ACE Nullifier",
			'fr-fr': "Annihilateur HIGH",
			'es-es': "Inhibidor AS",
			'it-it': "Annulla ASSO",
			'pt-br': "Anulador ACE",
			'de-de': "ASS-Annullierer"
		},

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, your opponent can't play any ACE SPEC cards from their hand.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, votre adversaire ne peut pas jouer de cartes HIGH-TECH de sa main.",
			'es-es': "Si este Pokémon tiene una Herramienta Pokémon unida, tu rival no puede jugar ninguna carta de AS TÁCTICO de su mano.",
			'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, il tuo avversario non può giocare le carte ASSO TATTICO che ha in mano.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, seu oponente não poderá jogar nenhuma carta ACE SPEC da mão dele.",
			'de-de': "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, kann dein Gegner keine ASS-KLASSE-Karten aus seiner Hand spielen."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Magnetic Blast",
			'fr-fr': "Explosion Magnétique",
			'es-es': "Explosión Magnética",
			'it-it': "Magnetebomba",
			'pt-br': "Explosão Magnética",
			'de-de': "Magnetstoß"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Kazumasa Yasukuni",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780936,
				tcgplayer: 560350
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780936,
				tcgplayer: 560350
			}
		},
	],
}

export default card
