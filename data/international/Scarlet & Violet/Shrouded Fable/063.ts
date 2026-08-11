import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Powerglass",
		'fr-fr': "Sablier du Pouvoir",
		'es-es': "Reloj de Arena Potenciador",
		'it-it': "Clessidra Energetica",
		'pt-br': "Ampulheta Poderosa",
		'de-de': "Power-Sanduhr"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "At the end of your turn (after your attack), if the Pokémon this card is attached to is in the Active Spot, you may attach a Basic Energy card from your discard pile to it.",
		'fr-fr': "À la fin de votre tour (après votre attaque), si le Pokémon auquel cette carte est attachée est sur le Poste Actif, vous pouvez lui attacher une carte Énergie de base de votre pile de défausse.",
		'es-es': "Al final de tu turno (después de tu ataque), si el Pokémon al que está unida esta carta está en el Puesto Activo, puedes unirle 1 carta de Energía Básica de tu pila de descartes.",
		'it-it': "Alla fine del tuo turno, dopo il tuo attacco, se il Pokémon a cui è assegnata questa carta è in posizione attiva, puoi assegnargli una carta Energia base dalla tua pila degli scarti.",
		'pt-br': "No final do seu turno (depois do seu ataque), se o Pokémon ao qual esta carta está ligada estiver no Campo Ativo, você poderá ligar uma carta de Energia Básica da sua pilha de descarte a ele.",
		'de-de': "Am Ende deines Zuges (nachdem du angegriffen hast), wenn das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist, kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an jenes Pokémon anlegen."
	},

	trainerType: "Tool",
	regulationMark: "H",


	illustrator: "Studio Bora Inc.",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780959,
				tcgplayer: 560374
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780959,
				tcgplayer: 560374
			}
		},
	],
}

export default card
