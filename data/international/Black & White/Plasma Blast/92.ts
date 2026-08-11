import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "G Booster",
		'fr-fr': "Impulsion G",
		'es-es': "Intensificador G",
		'it-it': "Carica G",
		'pt-br': "Booster G",
		'de-de': "G-Booster"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Genesect-EX auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		'en-us': "Discard 2 Energy attached to this Pokémon. This attack’s damage isn’t affected by any effects on the Defending Pokémon.",
		'es-es': "Descarta 2 Energías unidas a este Pokémon. El daño de este ataque no se ve afectado por ninguno de los efectos en el Pokémon Defensor.",
		'it-it': "Scarta due Energie assegnate a questo Pokémon. Il danno di questo attacco non è influenzato da alcun effetto presente sul Pokémon difensore.",
		'pt-br': "Descarte 2 Energias ligadas a este Pokémon. O dano deste ataque não é afetado por nenhum efeito no Pokémon Defensor.",
		'de-de': "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel. Der Schaden dieses Angriffs wird durch Effekte auf dem Verteidigenden Pokémon nicht verändert."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281113,
		tcgplayer: 85595
	}
}

export default card
