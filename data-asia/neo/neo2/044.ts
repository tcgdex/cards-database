import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Forretress",
         ja: "forretress",
         fr: "Forêt",
         de: "Forressress",
         es: "Forrar",
         it: "Forrettrice",
         pt: "Forretress",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [205],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Spikes",
            ja: "スパイク",
            fr: "Pointes",
            de: "Spikes",
            es: "Zapatillas con clavos",
            it: "Picchi",
            pt: "Picos",
          },
          effect: {
            en: "During your opponent's turn, whenever 1 of your opponent's Benched Pokmon becomes his or her Active Pokmon, Forretress does 10 damage to it. <em>(Don't apply Weakness and Resistance.)</em> This power stops working if Forretress is Asleep, Confused, or Paralyzed.",
            ja: "対戦相手のターン中、対戦相手のベンチに入ったポクモンの1人が彼または彼女のアクティブなポクモンになるたびに、フォアレットはそれに10ダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em> fortretressが眠っている、混乱し、麻痺している場合、このパワーは機能しなくなります。",
            fr: "Pendant le tour de votre adversaire, chaque fois que l'un des Pokmon bancés de votre adversaire devient son pokmon actif, Forredress lui fait 10 dégâts. <em> (N'appliquez pas la faiblesse et la résistance.) </em> Ce pouvoir cesse de fonctionner si Forreser est endormi, confus ou paralysé.",
            de: "Während der an der Reihe Ihres Gegners, wenn ein Pokmon Ihres Gegners zu seinem aktiven Pokmon wird, schädigt es 10 Schäden daran. <em> (wenden Sie keine Schwäche und Widerstand an.)",
            es: "Durante el turno de tu oponente, cada vez que 1 de los pokmon de banca de tu oponente se convierte en su Pokmon activo, Forretress le da 10 daños. <em> (no aplique debilidad y resistencia.) </em> Esta potencia deja de funcionar si Forretress está dormido, confundido o paralizado.",
            it: "Durante il turno del tuo avversario, ogni volta che 1 dei Pokmon in panchina del tuo avversario diventa il suo Pokmon attivo, Forretress fa 10 danni ad esso. <em> (Non applicare la debolezza e la resistenza.) </em> Questo potere smette di funzionare se Forretress è addormentato, confuso o paralizzato.",
            pt: "Durante a vez do seu oponente, sempre que um dos Pokmon em bancada do seu oponente se torna seu Pokmon ativo, Fisretress causa 10 danos a ele. <em> (não aplique fraqueza e resistência.) </em> Essa potência para de funcionar se a forragem estiver dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Rapid Spin",
            ja: "急速なスピン",
            fr: "Rotation rapide",
            de: "Schnellspin",
            es: "Giro rápido",
            it: "Spin rapido",
            pt: "Rotação rápida",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, he or she chooses 1 of them and switches it with his or her Active Pokemon, then, if you have any Benched Pokemon, you switch 1 of them with your Active Pokemon. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、アクティブなポケモンでそれを切り替え、ベンチポケモンをお持ちの場合は、アクティブなポケモンで1つを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Si votre adversaire a des pokémon bancés, il en choisit l'un d'entre eux et le change avec son pokemon actif, alors, si vous avez un pokemon banc, vous changez 1 d'entre eux avec votre Pokémon actif. (Faites les dégâts avant de changer le pokemon.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählt er oder sie 1 davon und wechselt es mit seinem aktiven Pokémon, wenn Sie ein Bank -Pokemon haben, wechseln Sie 1 davon mit Ihrem aktiven Pokémon. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y lo cambia con su Pokémon activo, entonces, si tienes algún Pokémon de banca, cambias 1 de ellos con tu Pokémon activo. (Haz el daño antes de cambiar el Pokémon).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e lo cambia con il suo Pokemon attivo, quindi, se hai dei Pokemon in panchina, ne cambierai 1 con il tuo Pokemon attivo. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com seu Pokémon ativo, então, se você tiver algum Pokémon em banco, troca 1 deles com seu Pokémon ativo. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
