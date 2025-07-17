import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Lileep",
         ja: "lileep",
         fr: "Lilep",
         de: "Lileep",
         es: "Lileep",
         it: "Lileep",
         pt: "Lileep",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [345],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Influence",
            ja: "影響",
            fr: "Influence",
            de: "Beeinflussen",
            es: "Influencia",
            it: "Influenza",
            pt: "Influência",
          },
          effect: {
            en: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokemon as Basic Pokemon.",
            ja: "オマニテ、カブト、アエロダクチル、リリープ、またはアノリスをデッキで検索し、2つをベンチに入れます。その後、デッキをシャッフルします。新しいベンチポケモンを基本的なポケモンとして扱います。",
            fr: "Recherchez votre deck pour Omanyte, Kabuto, Aerodactyl, Lileep ou Anorith et en mettez 2 sur votre banc. Mélanger votre deck par la suite. Traitez le nouveau Pokémon bancné comme un pokemon de base.",
            de: "Suchen Sie Ihr Deck nach Omanyte, Kabuto, Aerodactyl, Lileep oder Anorith und legen Sie 2 davon auf Ihre Bank. Mischen Sie anschließend Ihr Deck. Behandle das neue Bankpokémon als Basic -Pokemon.",
            es: "Busque en su mazo para Omanyte, Kabuto, Aerodactyl, Lileep o Anorith y coloque 2 de ellos en su banco. Baraja tu mazo después. Trate al nuevo Pokémon de banca como Pokémon básico.",
            it: "Cerca nel tuo mazzo per Omanyte, Kabuto, Aerodattilo, Lileep o Anorith e mettila 2 sulla panchina. Shuffle il tuo mazzo in seguito. Tratta il nuovo Pokemon in panchina come Pokemon di base.",
            pt: "Procure seu baralho para Omanyte, Kabuto, Aerodactyl, Lileep ou Anorith e coloque 2 deles em seu banco. Afaste seu baralho depois. Trate o novo Pokémon em banco como Pokémon básico.",
          },
        },
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
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
