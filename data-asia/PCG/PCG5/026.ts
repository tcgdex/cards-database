import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Wailord",
         ja: "ウェイロード",
         fr: "Wailord",
         de: "Wailord",
         es: "Gemelo",
         it: "WaiLord",
         pt: "Wailord",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [321],
      hp: 120,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reactive Lift",
            ja: "反応性リフト",
            fr: "Ascenseur réactif",
            de: "Reaktiver Aufzug",
            es: "Ascensor reactivo",
            it: "Sollevamento reattivo",
            pt: "Elevação reativa",
          },
          effect: {
            en: "As long as Wailord has any React Energy cards attached to it, the Retreat Cost for each of your Water PokÃ©mon (excluding PokÃ©mon-ex) is 0.",
            ja: "WailordにはReact Energy Cardsが付属している限り、Pokã©Mon（Pokã©Mon-Exを除く）のリトリートコストは0です。",
            fr: "Tant que Wailord a des cartes d'énergie React qui y sont fixées, le coût de retraite pour chacun de votre eau Pokã © Mon (à l'exclusion de Poké-Mol) est 0.",
            de: "Solange Wailord irgendwelche React-Energy-Karten befindet, ist die Rückzugskosten für jedes Ihrer Wasserpoké Mon (ohne Poké mon-ex) 0.",
            es: "Mientras Wailord tenga alguna tarjetas de energía reaccionadas adjuntas, el costo de retirada para cada uno de sus agua Poké Mon (excluyendo Poké Mon-Ex) es 0.",
            it: "Finché WaiLord ha qualsiasi scheda di energia react ad esso collegata, il costo di ritiro per ciascuno dei tuoi acqua poké (esclusa Poké mon-ex) è 0.",
            pt: "Enquanto Wailord possui qualquer cartões de energia do React anexados a ele, o custo do retiro para cada um dos seus poké de água (excluindo Poké Mon-Ex) é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Hypno Splash",
            ja: "催眠術",
            fr: "Hypno Splash",
            de: "Hypno Splash",
            es: "Hypno Splash",
            it: "Ipno Splash",
            pt: "Hypno splash",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 40,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Rely on Friends",
            ja: "友達に頼ってください",
            fr: "Compter sur des amis",
            de: "Verlassen sich auf Freunde",
            es: "Confiar en amigos",
            it: "Fai affidamento sugli amici",
            pt: "Confie em amigos",
          },
          effect: {
            en: "Does 40 damage plus 10 more damage for each of your Benched Stage 1 Evolved Pokemon.",
            ja: "40のダメージと、ベンチされたステージ1の各進化したポケモンに対してさらに10ダメージを与えます。",
            fr: "Fait 40 dégâts plus 10 dommages supplémentaires pour chacun de votre pokemon évolué de stade 1.",
            de: "Fügt 40 Schäden plus 10 weitere Schäden für jede Ihrer Bank -Stufe 1 entwickeltes Pokémon.",
            es: "Hace 40 daños más 10 daños más para cada uno de sus Pokémon evolucionado en la etapa 1 de banca.",
            it: "Fa 40 danni più 10 danni in più per ciascuno dei pokemon evoluti in fase 1 in panchina.",
            pt: "Causam 40 danos mais 10 mais danos para cada um dos seus Pokémon evoluídos em estágio 1 em bancada.",
          },
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
