import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Haunter",
         ja: "ハンター",
         fr: "Hancher",
         de: "Haunter",
         es: "Perseguidor",
         it: "Haunter",
         pt: "Assombro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [93],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Time Spiral",
            ja: "タイムスパイラル",
            fr: "Time Spiral",
            de: "Zeitspirale",
            es: "Tiempo en espiral",
            it: "Time Spiral",
            pt: "Tempo em espiral",
          },
          effect: {
            en: "If your opponent has any Evolved Pokemon in play, choose 1 of them and flip a coin. If heads, remove the highest Stage Evolution card on that Pokemon and have your opponent shuffle it into his or her deck.",
            ja: "相手が進化したポケモンをプレイしている場合は、1つを選択してコインをひっくり返します。頭の場合は、そのポケモンの最高段階の進化カードを取り外し、相手にそれを彼または彼女のデッキにシャッフルさせます。",
            fr: "Si votre adversaire a un pokemon évolué en jeu, choisissez 1 d'entre eux et retournez une pièce. Si les têtes, retirez la carte d'évolution de la scène la plus élevée de ce pokemon et demandez à votre adversaire de le mélanger dans son deck.",
            de: "Wenn Ihr Gegner ein entwickeltes Pokémon im Spiel hat, wählen Sie 1 davon und drehen Sie eine Münze. Wenn Sie Köpfe sind, entfernen Sie die Evolutionskarte mit der höchsten Bühne auf diesem Pokémon und lassen Sie Ihren Gegner sie in sein Deck mischen.",
            es: "Si tu oponente tiene algún Pokémon evolucionado en juego, elige 1 de ellos y voltea una moneda. Si se dirige, retire la tarjeta de evolución del escenario más alta en ese Pokémon y haga que su oponente la arrastre en su mazo.",
            it: "Se il tuo avversario ha un Pokemon evoluto in gioco, scegline 1 e capovolgi una moneta. Se le teste, rimuovi la carta di evoluzione del palco più alto su quel Pokemon e fai in modo che il tuo avversario lo mescoli nel suo mazzo.",
            pt: "Se o seu oponente tiver algum Pokemon evoluído em jogo, escolha 1 deles e vire uma moeda. Se as cabeças, remova a carta de evolução mais alta naquele Pokémon e peça ao seu oponente embarcar no deck dele ou dela.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Haunt",
            ja: "出没",
            fr: "Hanter",
            de: "Verfolgen",
            es: "Guarida",
            it: "Haunt",
            pt: "Assombrar",
          },
          effect: {
            en: "Put 2 damage counters on the Defending Pokemon.",
            ja: "防御ポケモンに2つのダメージカウンターを置きます。",
            fr: "Mettez 2 compteurs de dégâts sur le Pokémon en défense.",
            de: "Setzen Sie 2 Schadenszähler auf das verteidigende Pokémon.",
            es: "Pon 2 contadores de daño en el Pokémon defensor.",
            it: "Metti 2 contatori di danno sul Pokemon in carica.",
            pt: "Coloque 2 contadores de danos no Pokémon atual.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
