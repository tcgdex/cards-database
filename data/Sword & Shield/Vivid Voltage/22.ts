import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zarude V",
		fr: "Zarude V",
		es: "Zarude V",
		it: "Zarude V",
		pt: "Zarude V",
		de: "Zarude V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Holo Rare V",
	category: "Pokemon",
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
				en: "Bind Down",
				fr: "Astreinte",
				es: "Amarrar",
				it: "Legafermo",
				pt: "Aprisionamento",
				de: "Anbinden"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Jungle Rising",
				fr: "Jungle Grimpante",
				es: "Selva Ascendente",
				it: "Giungla Nascente",
				pt: "Insurreição da Selva",
				de: "Dschungelaufstand"
			},
			effect: {
				en: "You may attach up to 2 basic Energy cards from your hand to your Benched Pokémon in any way you like. If you attached Energy to a Pokémon in this way, heal all damage from that Pokémon.",
				fr: "Vous pouvez attacher jusqu'à 2 cartes Énergie de base de votre main à vos Pokémon de Banc comme il vous plaît. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez tous les dégâts de ce Pokémon.",
				es: "Puedes unir hasta 2 cartas de Energía Básica de tu mano a tus Pokémon en Banca de la manera que desees. Si has unido Energía a un Pokémon de esta manera, cura todos los puntos de daño a ese Pokémon.",
				it: "Puoi assegnare ai tuoi Pokémon in panchina fino a due carte Energia base dalla tua mano nel modo che preferisci. Se hai assegnato dell'Energia a un Pokémon in questo modo, cura quel Pokémon da tutti i danni.",
				pt: "Você pode ligar até 2 cartas de Energia básica da sua mão aos seus Pokémon no Banco como desejar. Se você ligou Energia a um Pokémon desta forma, cure todo o dano daquele Pokémon.",
				de: "Du kannst bis zu 2 Basis-Energiekarten aus deiner Hand beliebig an die Pokémon auf deiner Bank anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile allen Schaden bei jenem Pokémon."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 511530
	}
}

export default card
