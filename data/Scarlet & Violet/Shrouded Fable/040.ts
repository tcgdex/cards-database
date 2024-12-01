import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Genesect",
		fr: "Genesect",
		es: "Genesect",
		it: "Genesect",
		pt: "Genesect",
		de: "Genesect"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "ACE Nullifier",
			fr: "Annihilateur HIGH",
			es: "Inhibidor AS",
			it: "Annulla ASSO",
			pt: "Anulador ACE",
			de: "ASS-Annullierer"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, your opponent can't play any ACE SPEC cards from their hand.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, votre adversaire ne peut pas jouer de cartes HIGH-TECH de sa main.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, tu rival no puede jugar ninguna carta de AS TÁCTICO de su mano.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, il tuo avversario non può giocare le carte ASSO TATTICO che ha in mano.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, seu oponente não poderá jogar nenhuma carta ACE SPEC da mão dele.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, kann dein Gegner keine ASS-KLASSE-Karten aus seiner Hand spielen."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Magnetic Blast",
			fr: "Explosion Magnétique",
			es: "Explosión Magnética",
			it: "Magnetebomba",
			pt: "Explosão Magnética",
			de: "Magnetstoß"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
