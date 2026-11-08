import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [487],
	set: Set,

	name: {
		'en-us': "Giratina VSTAR",
		'fr-fr': "Giratina VSTAR",
		'es-es': "Giratina V-ASTRO",
		'it-it': "Giratina V ASTRO",
		'pt-br': "Giratina V-ASTRO",
		'de-de': "Giratina VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Giratina V",
		'fr-fr': "Giratina-V",
		'es-es': "Giratina V",
		'it-it': "Giratina-V",
		'pt-br': "Giratina V",
		'de-de': "Giratina-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Psychic", "Colorless"],

		name: {
			'en-us': "Lost Impact",
			'fr-fr': "Impact Perdu",
			'es-es': "Impacto Perdido",
			'it-it': "Impatto Perduto",
			'pt-br': "Impacto Perdido",
			'de-de': "Nirgendwo-Einschlag"
		},

		effect: {
			'en-us': "Put 2 Energy attached to your Pokémon in the Lost Zone.",
			'fr-fr': "Placez 2 Énergies attachées à vos Pokémon dans la Zone Perdue.",
			'es-es': "Pon 2 Energías unidas a tus Pokémon en la Zona Perdida.",
			'it-it': "Prendi due Energie assegnate ai tuoi Pokémon e mettile nell'area perduta.",
			'pt-br': "Coloque 2 Energias ligadas aos seus Pokémon na Zona Perdida.",
			'de-de': "Lege 2 an deine Pokémon angelegte Energien ins Nirgendwo."
		},

		damage: 280
	}, {
		cost: ["Grass", "Psychic"],

		name: {
			'en-us': "Star Requiem",
			'fr-fr': "Requiem Star",
			'es-es': "Astro Réquiem",
			'it-it': "Astro Requiem",
			'pt-br': "Réquiem Astral",
			'de-de': "Sternenrequiem"
		},

		effect: {
			'en-us': "You can use this attack only if you have 10 or more cards in the Lost Zone. Your opponent's Active Pokémon is Knocked Out. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous avez 10 cartes ou plus dans la Zone Perdue. Le Pokémon Actif de votre adversaire est mis K.O. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Puedes usar este ataque solo si tienes 10 cartas o más en la Zona Perdida. El Pokémon Activo de tu rival queda Fuera de Combate. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Puoi usare questo attacco solo se hai 10 o più carte nell'area perduta. Il Pokémon attivo del tuo avversario viene messo KO. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Você só pode usar este ataque se tiver 10 ou mais cartas na Zona Perdida. O Pokémon Ativo do seu oponente é Nocauteado (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn du 10 oder mehr Karten im Nirgendwo hast. Das Aktive Pokémon deines Gegners ist kampfunfähig. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674143,
				tcgplayer: 284051
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 674367
			}
		},
	],
}

export default card
