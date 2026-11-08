import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		'en-us': "Radiant Venusaur",
		'fr-fr': "Florizarre Radieux",
		'es-es': "Venusaur Radiante",
		'it-it': "Venusaur Lucente",
		'pt-br': "Venusaur Radiante",
		'de-de': "Strahlendes Bisaflor"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sunny Bloom",
			'fr-fr': "Floraison Solaire",
			'es-es': "Floración Soleada",
			'it-it': "Fioritura Solare",
			'pt-br': "Florescer Ensolarado",
			'de-de': "Sonnige Blüte"
		},

		effect: {
			'en-us': "Once at the end of your turn (after your attack), you may use this Ability. Draw cards until you have 4 cards in your hand.",
			'fr-fr': "Une fois à la fin de votre tour (après votre attaque), vous pouvez utiliser ce talent. Piochez des cartes jusqu'à en avoir 4 en main.",
			'es-es': "Una vez al final de tu turno (después de tu ataque), puedes usar esta habilidad. Roba cartas hasta que tengas 4 cartas en tu mano.",
			'it-it': "Una sola volta alla fine del tuo turno, dopoil tuo attacco, puoi usare questa abilità. Pesca fino ad avere quattro carte in mano.",
			'pt-br': "Uma vez no final do seu turno (depois do seu ataque), você poderá usar esta Habilidade. Compre cartas até ter 4 cartas na sua mão.",
			'de-de': "Einmal am Ende deines Zuges (nachdem du angegriffen hast) kannst du diese Fähigkeit einsetzen. Ziehe so lange Karten, bis du 4 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Pollen Hazard",
			'fr-fr': "Pollen Dangereux",
			'es-es': "Polen Nocivo",
			'it-it': "Rischio Polline",
			'pt-br': "Pólen Perigoso",
			'de-de': "Pollengefahr"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665238,
				tcgplayer: 274465
			}
		},
	],
}

export default card
