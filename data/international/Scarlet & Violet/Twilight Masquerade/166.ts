import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Boomerang Energy",
		'fr-fr': "Énergie Boomerang",
		'es-es': "Energía Bumerán",
		'it-it': "Energia Boomerang",
		'pt-br': "Energia Bumerangue",
		'de-de': "Bumerang-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		'en-us': "As long as this card is attached to a Pokémon, it provides {C} Energy.\n\nIf this card is discarded by an effect of an attack used by the Pokémon this card is attached to, attach this card from your discard pile to that Pokémon after attacking.",
		'fr-fr': "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {C}.\n\nSi cette carte est défaussée par un effet d'une attaque utilisée par le Pokémon auquel cette carte est attachée, attachez cette carte de votre pile de défausse à ce Pokémon après votre attaque.",
		'es-es': "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {C}.\n\nSi esta carta se descarta por el efecto de un ataque usado por el Pokémon al que esté unida, une esta carta de tu pila de descartes a ese Pokémon después de atacar.",
		'it-it': "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {C}.\n\nSe questa carta viene scartata per effetto di un attacco usato dal Pokémon a cui è assegnata, assegna questa carta dalla tua pila degli scarti a quel Pokémon dopo aver attaccato.",
		'pt-br': "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {C}.\nSe esta carta for descartada pelo efeito de um ataque usado pelo Pokémon ao qual esta carta está ligada, ligue esta carta da sua pilha de descarte àquele Pokémon após atacar.",
		'de-de': "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {C}-Energie.\nWenn diese Karte durch einen Effekt einer von dem Pokémon, an das diese Karte angelegt ist, eingesetzten Attacke auf deinen Ablagestapel gelegt wird, lege diese Karte aus deinem Ablagestapel an jenes Pokémon an, nachdem du angegriffen hast."
	},

	energyType: "Special",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769340,
				tcgplayer: 550210
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769340,
				tcgplayer: 550210
			}
		},
	],

}

export default card