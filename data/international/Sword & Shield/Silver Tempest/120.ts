import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [385],
	set: Set,

	name: {
		'en-us': "Radiant Jirachi",
		'fr-fr': "Jirachi Radieux",
		'es-es': "Jirachi Radiante",
		'it-it': "Jirachi Lucente",
		'pt-br': "Jirachi Radiante",
		'de-de': "Strahlendes Jirachi"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Entrusted Wishes",
			'fr-fr': "Souhaits Confiés",
			'es-es': "Pedir un Deseo",
			'it-it': "Desideri Confidati",
			'pt-br': "Desejos Confiados",
			'de-de': "Anvertraute Wünsche"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, cherchez dans votre deck jusqu'à 3 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo fino a tre carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Astral Misfortune",
			'fr-fr': "Malchance Astrale",
			'es-es': "Desgracia Astral",
			'it-it': "Sventura Astrale",
			'pt-br': "Azar dos Astros",
			'de-de': "Astralunglück"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est mis K.O.",
			'es-es': "Lanza 2 monedas. Si ambas son cara, el Pokémon Activo de tu rival queda Fuera de Combate.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene messo KO.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, o Pokémon Ativo do seu oponente será Nocauteado.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, ist das Aktive Pokémon deines Gegners kampfunfähig."
		}
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
	regulationMark: "F",


	description: {
		'en-us': "It is said to have the ability to grant any wish for just one week every thousand years.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682167,
				tcgplayer: 450292
			}
		},
	],
}

export default card
