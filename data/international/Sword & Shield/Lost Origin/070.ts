import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [302],
	set: Set,

	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "Shibuzoh.",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 20
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Lost Mine",
			'fr-fr': "Mine Perdue",
			'es-es': "Mina Perdida",
			'it-it': "Miniera Perduta",
			'pt-br': "Mina Perdida",
			'de-de': "Nirgendwo-Mine"
		},

		effect: {
			'en-us': "You can use this attack only if you have 10 or more cards in the Lost Zone. Put 12 damage counters on your opponent's Pokémon in any way you like.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous avez 10 cartes ou plus dans la Zone Perdue. Placez 12 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'es-es': "Puedes usar este ataque solo si tienes 10 cartas o más en la Zona Perdida. Pon 12 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Puoi usare questo attacco solo se hai 10 o più carte nell'area perduta. Metti 12 segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Você só pode usar este ataque se tiver 10 ou mais cartas na Zona Perdida. Coloque 12 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn du 10 oder mehr Karten im Nirgendwo hast. Lege 12 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674079,
				tcgplayer: 283946
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674079,
				tcgplayer: 283946
			}
		},
	],
}

export default card
