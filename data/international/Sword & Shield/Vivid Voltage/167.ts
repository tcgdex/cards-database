import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Zarude V",
		'fr-fr': "Zarude V",
		'es-es': "Zarude V",
		'it-it': "Zarude V",
		'pt-br': "Zarude V",
		'de-de': "Zarude V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [893],
	set: Set,
	hp: 210,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bind Down",
				'fr-fr': "Astreinte",
				'es-es': "Amarrar",
				'it-it': "Legafermo",
				'pt-br': "Aprisionamento",
				'de-de': "Anbinden"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Jungle Rising",
				'fr-fr': "Jungle Grimpante",
				'es-es': "Selva Ascendente",
				'it-it': "Giungla Nascente",
				'pt-br': "Insurreição da Selva",
				'de-de': "Dschungelaufstand"
			},
			effect: {
				'en-us': "You may attach up to 2 basic Energy cards from your hand to your Benched Pokémon in any way you like. If you attached Energy to a Pokémon in this way, heal all damage from that Pokémon.",
				'fr-fr': "Vous pouvez attacher jusqu'à 2 cartes Énergie de base de votre main à vos Pokémon de Banc comme il vous plaît. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez tous les dégâts de ce Pokémon.",
				'es-es': "Puedes unir hasta 2 cartas de Energía Básica de tu mano a tus Pokémon en Banca de la manera que desees. Si has unido Energía a un Pokémon de esta manera, cura todos los puntos de daño a ese Pokémon.",
				'it-it': "Puoi assegnare ai tuoi Pokémon in panchina fino a due carte Energia base dalla tua mano nel modo che preferisci. Se hai assegnato dell'Energia a un Pokémon in questo modo, cura quel Pokémon da tutti i danni.",
				'pt-br': "Você pode ligar até 2 cartas de Energia básica da sua mão aos seus Pokémon no Banco como desejar. Se você ligou Energia a um Pokémon desta forma, cure todo o dano daquele Pokémon.",
				'de-de': "Du kannst bis zu 2 Basis-Energiekarten aus deiner Hand beliebig an die Pokémon auf deiner Bank anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile allen Schaden bei jenem Pokémon."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512545,
				tcgplayer: 226389
			}
		},
	],
}

export default card
