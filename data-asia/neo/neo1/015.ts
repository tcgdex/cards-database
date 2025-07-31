import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Bellossom",
         ja: "Bellossom",
         fr: "Clocher",
         de: "Bellossom",
         es: "Brillo",
         it: "Belssom",
         pt: "Bellossom",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [182],
      hp: 70,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sweet Nectar",
            ja: "甘い蜜",
            fr: "Nectar doux",
            de: "Süßer Nektar",
            es: "Néctar dulce",
            it: "Nettare dolce",
            pt: "Néctar doce",
          },
          effect: {
            en: "Flip a coin. If heads, remove all damage counters from 1 of your Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、ポケモンの1つからすべてのダメージカウンターを削除します。",
            fr: "Retourner une pièce. Si les têtes, retirez tous les compteurs de dégâts de 1 de votre Pokémon.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entfernen Sie alle Schadenszähler von 1 Ihres Pokémon.",
            es: "Voltea una moneda. Si se dirige, retire todos los contadores de daño de 1 de su Pokémon.",
            it: "Capovolgi una moneta. Se la testa, rimuovi tutti i contatori di danno da 1 del tuo Pokemon.",
            pt: "Vire uma moeda. Se as cabeças, remova todos os contadores de danos de 1 do seu Pokémon.",
          },
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Flower Dance",
            ja: "フラワーダンス",
            fr: "Danse des fleurs",
            de: "Blumentanz",
            es: "Baile de flores",
            it: "Danza dei fiori",
            pt: "Dança de flores",
          },
          effect: {
            en: "Does 30 damage times the number of cards with Bellossom in their names that you have in play (including this one).",
            ja: "30回のダメージを与えますBellossomを含むカードの数は、あなたがプレイしている名前（これを含む）を持っている名前にあります。",
            fr: "Fait 30 dégâts de temps le nombre de cartes avec Bellossom dans leurs noms que vous avez en jeu (y compris celui-ci).",
            de: "Macht 30 Schadenszeiten die Anzahl der Karten mit Bellossom in ihren Namen, die Sie im Spiel haben (einschließlich dieser).",
            es: "Hace 30 tiempos de daño el número de cartas con Blossom en sus nombres que tienes en juego (incluido este).",
            it: "Fa 30 danni il numero di carte con bellossom nei loro nomi che hai in gioco (incluso questo).",
            pt: "30 danos vezes o número de cartas com Bellossom em seus nomes que você tem em jogo (incluindo este).",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
