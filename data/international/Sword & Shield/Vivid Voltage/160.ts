import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Telescopic Sight",
		'fr-fr': "Viseur Téléscopique",
		'es-es': "Visión Telescópica",
		'it-it': "Vista Telescopica",
		'pt-br': "Visão Telescópica",
		'de-de': "Teleskopisches Visier"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Benched Pokémon V and Benched Pokémon-GX.",
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires aux Pokémon-V de Banc et Pokémon-GX de Banc de votre adversaire.",
		'es-es': "Los ataques del Pokémon al que está unida esta carta hacen 30 puntos de daño más a los Pokémon V en Banca y Pokémon-GX en Banca de tu rival.",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta infliggono 30 danni in più ai Pokémon-V e ai Pokémon-GX in panchina del tuo avversario.",
		'pt-br': "Os ataques do Pokémon ao qual esta carta está ligada causam 30 pontos de dano a mais aos Pokémon V e Pokémon-GX no Banco do seu oponente.",
		'de-de': "Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen den Pokémon-V und Pokémon-GX auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
	},

	trainerType: "Tool",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512510,
				tcgplayer: 226535
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512510,
				tcgplayer: 226535
			}
		},
	],
}

export default card
