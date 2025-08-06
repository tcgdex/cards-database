import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Mr. Rime",
		fr: "M. Glaquette de Galar",
		es: "Mr. Rime de Galar",
		it: "Mr. Rime di Galar",
		pt: "Mr. Rime de Galar",
		de: "Galar-Pantifrost"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Mr. Mime",
		fr: "M. Mime de Galar",
		es: "Mr. Mime de Galar",
		it: "Mr. Mime di Galar",
		pt: "Mr. Mime de Galar",
		de: "Galar-Pantimos"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Screen Cleaner",
				fr: "Brise-Barrière",
				es: "Antibarrera",
				it: "Annullabarriere",
				pt: "Limpa-vidro",
				de: "Hemmungslos"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to all of your Pokémon that have Energy attached. (Existing effects are not removed.)",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à tous vos Pokémon auxquels de l'Énergie est attachée. (Les effets déjà en action ne sont pas retirés.)",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a cada uno de tus Pokémon que tenga alguna Energía unida a él. (No se eliminan los efectos ya existentes).",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti ai tuoi Pokémon che hanno Energie assegnate. Gli effetti esistenti non vengono rimossi.",
				pt: "Previna todos os efeitos de ataques do seu oponente, exceto dano, causados a todos os seus Pokémon que tenham Energia ligada a eles (efeitos existentes não são removidos).",
				de: "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die allen deinen Pokémon zugefügt werden, an die Energie angelegt ist. (Bestehende Effekte werden nicht entfernt.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Triple Spin",
				fr: "Triple Tour",
				es: "Triple Giro",
				it: "Triploturbo",
				pt: "Giro Triplo",
				de: "Dreifachdreher"
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It's highly skilled at tap-dancing. It waves its cane of ice in time with its graceful movements."
	},

	thirdParty: {
		cardmarket: 456428,
		tcgplayer: 213116
	}
}

export default card
