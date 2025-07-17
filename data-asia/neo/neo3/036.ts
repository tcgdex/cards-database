import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Celebi",
         ja: "セレビ",
         fr: "Célebi",
         de: "Celebi",
         es: "Celebrante",
         it: "Celebi",
         pt: "Celebi",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [251],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Time Travel",
            ja: "タイムトラベル",
            fr: "Voyage dans le temps",
            de: "Zeitreisen",
            es: "Viaje en el tiempo",
            it: "Viaggio nel tempo",
            pt: "Viagem no tempo",
          },
          effect: {
            en: "If an opponent's attack would Knock Out Celebi, flip a coin. If heads, Celebi isn't Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn't work if Celebi is already Asleep, Confused, or Paralyzed.",
            ja: "対戦相手の攻撃がセレビをノックアウトする場合、コインをひっくり返します。頭の場合、セレビはノックアウトされず、それをシャッフルし、すべてのカードをデッキに取り付けます。セレビがすでに眠っている、混乱し、麻痺している場合、この力は機能しません。",
            fr: "Si l'attaque d'un adversaire éliminait Celebi, retournez une pièce. Si les têtes, Celebi ne sont pas éliminées et vous le mélangez et toutes les cartes qui y sont attachées dans votre deck. Ce pouvoir ne fonctionne pas si Celebi est déjà endormi, confus ou paralysé.",
            de: "Wenn der Angriff eines Gegners Celebi ausschalten würde, drehen Sie eine Münze aus. Wenn Köpfe, wird Celebi nicht ausgeschlagen und Sie mischen es und alle Karten, die an Ihr Deck angeschlossen sind. Diese Macht funktioniert nicht, wenn Celebi bereits schläft, verwirrt oder gelähmt ist.",
            es: "Si el ataque de un oponente noqueara a Celebi, voltee una moneda. Si se dirige, Celebi no seque y lo barajas y todas las cartas adjuntas en tu mazo. Este poder no funciona si Celebi ya está dormido, confundido o paralizado.",
            it: "Se l'attacco di un avversario eliminasse Celebi, lancia una moneta. Se la testa, Celebi non viene eliminata e lo mescoli e tutte le carte attaccate nel tuo mazzo. Questo potere non funziona se Celebi è già addormentato, confuso o paralizzato.",
            pt: "Se o ataque de um oponente nocauteia Celebi, vire uma moeda. Se as cabeças, Celebi não é nocauteado e você o embaralha e todas as cartas anexadas a ele no seu baralho. Esse poder não funciona se Celebi já estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psychic Damage",
            ja: "サイキックダメージ",
            fr: "Dommages psychiques",
            de: "Psychischer Schaden",
            es: "Daño psíquico",
            it: "Danno psichico",
            pt: "Dano psíquico",
          },
          effect: {
            en: "Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokemon.",
            ja: "3コインをフリップします。各ヘッドについて、ディフェンディングポケモンに1つのダメージカウンターを置きます。",
            fr: "Flip 3 pièces. Pour chaque tête, mettez 1 compteur de dégâts sur le Pokémon en défense.",
            de: "3 Münzen umdrehen. Legen Sie für jeden Köpfe 1 Schadenschalter auf das verteidigende Pokémon.",
            es: "Flip 3 monedas. Para cada cabezal, coloque 1 contador de daño en el Pokémon defensor.",
            it: "Flip 3 monete. Per ogni testa, mettere 1 contatore di danni sul Pokemon in difesa.",
            pt: "Flip 3 moedas. Para cada cabeça, coloque 1 contador de danos no Pokémon atual.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
