import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu (Delta Species)",
         ja: "ライチュ（デルタ種）",
         fr: "Raichu (espèces delta)",
         de: "Raichu (Delta -Arten)",
         es: "Raichu (especie delta)",
         it: "Raichu (Delta Species)",
         pt: "Raichu (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Zzzap",
            ja: "zzzap",
            fr: "Zzzap",
            de: "Zzzap",
            es: "Zzzap",
            it: "ZZZAP",
            pt: "Zzzap",
          },
          effect: {
            en: "Does 20 damage to each Pokemon that has any Poké-Powers or Poké-Bodies (both yours and your opponent's). Don't apply Weakness or Resistance.",
            ja: "ポケパワーやポケボディ（あなたと対戦相手の両方）がある各ポケモンに20のダメージを与えます。衰弱や抵抗を適用しないでください。",
            fr: "Fait 20 dégâts à chaque pokemon qui a des poké-powers ou des poké-corps (le vôtre et celui de votre adversaire). N'appliquez pas de faiblesse ou de résistance.",
            de: "Schädigt 20 jedes Pokémon, das Poké-Powers oder Poké-Körper hat (sowohl Ihre als auch die Ihres Gegners). Wenden Sie keine Schwäche oder Widerstand an.",
            es: "Hace 20 daños a cada Pokémon que tiene cualquier Poké-Power o Poké-Bodies (tanto el tuyo como el de tu oponente). No aplique debilidad o resistencia.",
            it: "Fa 20 danni ad ogni Pokemon che ha powers o bodie di Poké (sia il tuo che il tuo avversario). Non applicare debolezza o resistenza.",
            pt: "Causa 20 danos a cada Pokémon que possui pó de Poké ou corpos Poké (tanto os seus quanto o do seu oponente). Não aplique fraqueza ou resistência.",
          },
        },
        {
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            en: "Metallic Thunder",
            ja: "メタリックサンダー",
            fr: "Tonnerre métallique",
            de: "Metallic Donner",
            es: "Trueno metálico",
            it: "Thunder metallico",
            pt: "Trovão metálico",
          },
          effect: {
            en: "You may discard 2 Metal Energy attached to Raichu. If you do, this attack's base damage is 90 instead of 50.",
            ja: "Raichuに取り付けられた2つの金属エネルギーを捨てることができます。そうすれば、この攻撃の基本ダメージは50ではなく90です。",
            fr: "Vous pouvez jeter 2 énergie métallique attachée à Raichu. Si vous le faites, les dégâts de base de cette attaque sont de 90 au lieu de 50.",
            de: "Sie können 2 Metallenergie verwerfen, die an Raichu angebracht sind. Wenn Sie dies tun, beträgt der Grundschaden dieses Angriffs 90 statt 50.",
            es: "Puede descartar 2 energía metálica unida a Raichu. Si lo haces, el daño base de este ataque es 90 en lugar de 50.",
            it: "Puoi scartare 2 energia metallica attaccata a Raichu. Se lo fai, il danno base di questo attacco è 90 anziché 50.",
            pt: "Você pode descartar 2 energia de metal ligada a Raichu. Se o fizer, o dano básico desse ataque é 90 em vez de 50.",
          },
          damage: 50,
        },
      ],


      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
