import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Regenerative Energy",
		fr: "Énergie Régénérante",
		es: "Energía Regeneradora",
		it: "Energia Rigenerante",
		pt: "Energia Regenerativa",
		de: "Regenerative Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\nWhenever you play a Pokémon from your hand to evolve the Pokémon V this card is attached to, heal 100 damage from that Pokémon.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Colorless.\nLorsque vous jouez un Pokémon de votre main pour faire évoluer le Pokémon-V auquel cette carte est attachée, soignez 100 dégâts de ce Pokémon-là.",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Colorless.\nCada vez que juegues 1 Pokémon de tu mano para hacer evolucionar al Pokémon V al que esté unida esta carta, cura 100 puntos de daño a ese Pokémon.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Colorless.\nOgni volta che giochi un Pokémon dalla tua mano per far evolvere\nil Pokémon-V a cui è assegnata questa carta, cura quel Pokémon da 100 danni.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Colorless.\nSempre que você jogar um Pokémon da sua mão para evoluir o Pokémon V ao qual esta carta está ligada, cure 100 pontos de dano daquele Pokémon.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Colorless-Energie.\nJedes Mal, wenn du ein Pokémon aus deiner Hand spielst, um das Pokémon-V, an das diese Karte angelegt ist, zu entwickeln, heile 100 Schadenspunkte bei jenem Pokémon."
	},

	energyType: "Special",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682215
	}
}

export default card