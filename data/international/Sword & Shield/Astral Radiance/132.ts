import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [628],
	set: Set,

	name: {
		'en-us': "Hisuian Braviary",
		'fr-fr': "Gueriaigle de Hisui",
		'es-es': "Braviary de Hisui",
		'it-it': "Braviary di Hisui",
		'pt-br': "Braviary de Hisui",
		'de-de': "Hisui-Washakwil"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psywave",
			'fr-fr': "Vague Psy",
			'es-es': "Psicoonda",
			'it-it': "Psiconda",
			'pt-br': "Onda Psíquica",
			'de-de': "Psywelle"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Slashing Strike",
			'fr-fr': "Coup Déchirant",
			'es-es': "Golpe Cuchillazo",
			'it-it': "Lacerattacco",
			'pt-br': "Ataque Cortante",
			'de-de': "Schlitzender Schlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Slashing Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Screaming a bloodcurdling battle cry, this huge and ferocious bird Pokémon goes out on the hunt. It blasts lakes with shock waves, then scoops up any prey that float to the water's surface.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658793,
				tcgplayer: 272373
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658793,
				tcgplayer: 272373
			}
		},
	],
}

export default card
