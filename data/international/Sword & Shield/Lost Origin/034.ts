import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [87],
	set: Set,

	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'es-es': "Dewgong",
		'it-it': "Dewgong",
		'pt-br': "Dewgong",
		'de-de': "Jugong"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Swim Freely",
			'fr-fr': "Nage Libre",
			'es-es': "Nado Libre",
			'it-it': "Nuotata Libera",
			'pt-br': "Nadar Sossegado",
			'de-de': "Freischwimmen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Floe Return",
			'fr-fr': "Retour de Banquise",
			'es-es': "Retorno al Témpano",
			'it-it': "Lastraritorno",
			'pt-br': "Retorno Glacial",
			'de-de': "Schollenrückkehr"
		},

		effect: {
			'en-us': "Shuffle any amount of Water Energy from your Pokémon into your deck. This attack does 40 damage for each card you shuffled into your deck in this way.",
			'fr-fr': "Mélangez autant d'Énergies Water que vous le voulez de vos Pokémon avec votre deck. Cette attaque inflige 40 dégâts pour chaque carte mélangée avec votre deck de cette façon.",
			'es-es': "Pon cualquier cantidad de Energías Water de tus Pokémon en tu baraja y baraja todas las cartas. Este ataque hace 40 puntos de daño por cada carta que hayas puesto en tu baraja de esta manera.",
			'it-it': "Rimischia nel tuo mazzo tutte le Energie Water che vuoi dai tuoi Pokémon. Questo attacco infligge 40 danni per ogni carta che hai rimischiato in questo modo.",
			'pt-br': "Embaralhe qualquer quantidade de Energia Water dos seus Pokémon no seu baralho. Este ataque causa 40 pontos de dano para cada carta embaralhada no seu baralho desta forma.",
			'de-de': "Mische beliebig viele Water-Energien von deinen Pokémon in dein Deck. Diese Attacke fügt für jede auf diese Weise in dein Deck gemischte Karte 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674045,
				tcgplayer: 283908
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674045,
				tcgplayer: 283908
			}
		},
	],
}

export default card
